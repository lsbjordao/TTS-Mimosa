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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa luisana
const Mimosa_luisana = new Mimosa()
Mimosa_luisana.specificEpithet = 'luisana'

Mimosa_luisana.stems = new Stems()

Mimosa_luisana.stipule = new Stipule()
Mimosa_luisana.stipule.margin = new MarginStipule()
Mimosa_luisana.stipule.adaxial = new AdaxialStipule()
Mimosa_luisana.stipule.abaxial = new AbaxialStipule()

Mimosa_luisana.leaf = new Leaf()
Mimosa_luisana.leaf.petiole = new Petiole()
Mimosa_luisana.leaf.bipinnate = new Bipinnate()
Mimosa_luisana.leaf.bipinnate.rachis = new Rachis()
Mimosa_luisana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_luisana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_luisana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_luisana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_luisana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_luisana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(16)
Mimosa_luisana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 28)
Mimosa_luisana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_luisana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_luisana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_luisana.inflorescence = new Inflorescence()
Mimosa_luisana.inflorescence.peduncle = new Peduncle()
Mimosa_luisana.inflorescence.spicate = new Spicate()

Mimosa_luisana.flower = new Flower()
Mimosa_luisana.flower.bracteole = new Bracteole()
Mimosa_luisana.flower.merism = ['4-merous', '5-merous']
Mimosa_luisana.flower.calyx = new Calyx()
Mimosa_luisana.flower.calyx.shape = 'campanulate'
Mimosa_luisana.flower.corolla = new Corolla()
Mimosa_luisana.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_luisana.androecium = new Androecium()
Mimosa_luisana.androecium.filaments = new Filaments()
Mimosa_luisana.androecium.filaments.colour = 'pinkish'

Mimosa_luisana.ginoecium = new Ginoecium()
Mimosa_luisana.ginoecium.ovary = new Ovary()

Mimosa_luisana.fruit = new Fruit()
Mimosa_luisana.fruit.stipe = new Stipe()
Mimosa_luisana.fruit.replum = new Replum()
Mimosa_luisana.fruit.epicarp = new Epicarp()

Mimosa_luisana.seed = new Seed()


// Description authorship
Mimosa_luisana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_luisana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa luisana
export { Mimosa_luisana }