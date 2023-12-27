// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa andina
const Mimosa_andina = new Mimosa()
Mimosa_andina.specificEpithet = 'andina'

Mimosa_andina.stems = new Stems()

Mimosa_andina.stipule = new Stipule()
Mimosa_andina.stipule.margin = new MarginStipule()
Mimosa_andina.stipule.adaxial = new AdaxialStipule()
Mimosa_andina.stipule.abaxial = new AbaxialStipule()

Mimosa_andina.leaf = new Leaf()
Mimosa_andina.leaf.petiole = new Petiole()
Mimosa_andina.leaf.bipinnate = new Bipinnate()
Mimosa_andina.leaf.bipinnate.rachis = new Rachis()
Mimosa_andina.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_andina.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_andina.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_andina.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_andina.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_andina.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_andina.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 10)
Mimosa_andina.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_andina.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_andina.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_andina.inflorescence = new Inflorescence()
Mimosa_andina.inflorescence.peduncle = new Peduncle()
Mimosa_andina.inflorescence.capitate = new CapitateInflorescence()

Mimosa_andina.flower = new Flower()
Mimosa_andina.flower.bracteole = new Bracteole()
Mimosa_andina.flower.merism = ['5-merous', '6-merous']
Mimosa_andina.flower.calyx = new Calyx()
Mimosa_andina.flower.calyx.shape = 'campanulate'
Mimosa_andina.flower.corolla = new Corolla()
Mimosa_andina.flower.corolla.shape = 'funnelform'

Mimosa_andina.androecium = new Androecium()
Mimosa_andina.androecium.filaments = new Filaments()
Mimosa_andina.androecium.filaments.colour = 'whitenish'

Mimosa_andina.ginoecium = new Ginoecium()
Mimosa_andina.ginoecium.ovary = new Ovary()

Mimosa_andina.fruit = new Fruit()
Mimosa_andina.fruit.stipe = new Stipe()
Mimosa_andina.fruit.replum = new Replum()
Mimosa_andina.fruit.epicarp = new Epicarp()

Mimosa_andina.seed = new Seed()


// Description authorship
Mimosa_andina.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_andina.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa andina
export { Mimosa_andina }