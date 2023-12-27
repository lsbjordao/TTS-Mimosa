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


// Description of Mimosa revoluta
const Mimosa_revoluta = new Mimosa()
Mimosa_revoluta.specificEpithet = 'revoluta'

Mimosa_revoluta.stems = new Stems()

Mimosa_revoluta.stipule = new Stipule()
Mimosa_revoluta.stipule.margin = new MarginStipule()
Mimosa_revoluta.stipule.adaxial = new AdaxialStipule()
Mimosa_revoluta.stipule.abaxial = new AbaxialStipule()

Mimosa_revoluta.leaf = new Leaf()
Mimosa_revoluta.leaf.petiole = new Petiole()
Mimosa_revoluta.leaf.bipinnate = new Bipinnate()
Mimosa_revoluta.leaf.bipinnate.rachis = new Rachis()
Mimosa_revoluta.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_revoluta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_revoluta.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(3)
Mimosa_revoluta.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 6)
Mimosa_revoluta.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_revoluta.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_revoluta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_revoluta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 17)
Mimosa_revoluta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(19)
Mimosa_revoluta.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_revoluta.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_revoluta.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_revoluta.inflorescence = new Inflorescence()
Mimosa_revoluta.inflorescence.peduncle = new Peduncle()
Mimosa_revoluta.inflorescence.capitate = new CapitateInflorescence()

Mimosa_revoluta.flower = new Flower()
Mimosa_revoluta.flower.bracteole = new Bracteole()
Mimosa_revoluta.flower.merism = ['5-merous', '6-merous']
Mimosa_revoluta.flower.calyx = new Calyx()
Mimosa_revoluta.flower.calyx.shape = 'campanulate'
Mimosa_revoluta.flower.corolla = new Corolla()
Mimosa_revoluta.flower.corolla.shape = 'trumpet-shaped'

Mimosa_revoluta.androecium = new Androecium()
Mimosa_revoluta.androecium.filaments = new Filaments()

Mimosa_revoluta.ginoecium = new Ginoecium()
Mimosa_revoluta.ginoecium.ovary = new Ovary()

Mimosa_revoluta.fruit = new Fruit()
Mimosa_revoluta.fruit.stipe = new Stipe()
Mimosa_revoluta.fruit.replum = new Replum()
Mimosa_revoluta.fruit.epicarp = new Epicarp()

Mimosa_revoluta.seed = new Seed()


// Description authorship
Mimosa_revoluta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_revoluta.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa revoluta
export { Mimosa_revoluta }