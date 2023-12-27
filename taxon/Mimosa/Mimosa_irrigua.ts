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


// Description of Mimosa irrigua
const Mimosa_irrigua = new Mimosa()
Mimosa_irrigua.specificEpithet = 'irrigua'

Mimosa_irrigua.stems = new Stems()

Mimosa_irrigua.stipule = new Stipule()
Mimosa_irrigua.stipule.margin = new MarginStipule()
Mimosa_irrigua.stipule.adaxial = new AdaxialStipule()
Mimosa_irrigua.stipule.abaxial = new AbaxialStipule()

Mimosa_irrigua.leaf = new Leaf()
Mimosa_irrigua.leaf.petiole = new Petiole()
Mimosa_irrigua.leaf.bipinnate = new Bipinnate()
Mimosa_irrigua.leaf.bipinnate.rachis = new Rachis()
Mimosa_irrigua.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_irrigua.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_irrigua.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_irrigua.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_irrigua.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_irrigua.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_irrigua.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(2)
Mimosa_irrigua.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_irrigua.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_irrigua.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_irrigua.inflorescence = new Inflorescence()
Mimosa_irrigua.inflorescence.peduncle = new Peduncle()
Mimosa_irrigua.inflorescence.capitate = new CapitateInflorescence()

Mimosa_irrigua.flower = new Flower()
Mimosa_irrigua.flower.bracteole = new Bracteole()
Mimosa_irrigua.flower.calyx = new Calyx()
Mimosa_irrigua.flower.calyx.shape = 'campanulate'
Mimosa_irrigua.flower.corolla = new Corolla()

Mimosa_irrigua.androecium = new Androecium()
Mimosa_irrigua.androecium.filaments = new Filaments()
Mimosa_irrigua.androecium.filaments.colour = ['whitenish', 'creamish']

Mimosa_irrigua.ginoecium = new Ginoecium()
Mimosa_irrigua.ginoecium.ovary = new Ovary()

Mimosa_irrigua.fruit = new Fruit()
Mimosa_irrigua.fruit.stipe = new Stipe()
Mimosa_irrigua.fruit.replum = new Replum()
Mimosa_irrigua.fruit.epicarp = new Epicarp()

Mimosa_irrigua.seed = new Seed()


// Description authorship
Mimosa_irrigua.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_irrigua.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa irrigua
export { Mimosa_irrigua }