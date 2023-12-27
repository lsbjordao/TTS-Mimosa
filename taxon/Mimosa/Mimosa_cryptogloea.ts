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


// Description of Mimosa cryptogloea
const Mimosa_cryptogloea = new Mimosa()
Mimosa_cryptogloea.specificEpithet = 'cryptogloea'

Mimosa_cryptogloea.stems = new Stems()

Mimosa_cryptogloea.stipule = new Stipule()
Mimosa_cryptogloea.stipule.margin = new MarginStipule()
Mimosa_cryptogloea.stipule.adaxial = new AdaxialStipule()
Mimosa_cryptogloea.stipule.abaxial = new AbaxialStipule()

Mimosa_cryptogloea.leaf = new Leaf()
Mimosa_cryptogloea.leaf.petiole = new Petiole()
Mimosa_cryptogloea.leaf.bipinnate = new Bipinnate()
Mimosa_cryptogloea.leaf.bipinnate.rachis = new Rachis()
Mimosa_cryptogloea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cryptogloea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cryptogloea.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_cryptogloea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cryptogloea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cryptogloea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cryptogloea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(3)
Mimosa_cryptogloea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 6)
Mimosa_cryptogloea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(8)
Mimosa_cryptogloea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cryptogloea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cryptogloea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cryptogloea.inflorescence = new Inflorescence()
Mimosa_cryptogloea.inflorescence.peduncle = new Peduncle()
Mimosa_cryptogloea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cryptogloea.flower = new Flower()
Mimosa_cryptogloea.flower.bracteole = new Bracteole()
Mimosa_cryptogloea.flower.calyx = new Calyx()
Mimosa_cryptogloea.flower.calyx.shape = 'campanulate'
Mimosa_cryptogloea.flower.corolla = new Corolla()
Mimosa_cryptogloea.flower.corolla.shape = 'subcylindric'

Mimosa_cryptogloea.androecium = new Androecium()
Mimosa_cryptogloea.androecium.filaments = new Filaments()
Mimosa_cryptogloea.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_cryptogloea.ginoecium = new Ginoecium()
Mimosa_cryptogloea.ginoecium.ovary = new Ovary()

Mimosa_cryptogloea.fruit = new Fruit()
Mimosa_cryptogloea.fruit.stipe = new Stipe()
Mimosa_cryptogloea.fruit.replum = new Replum()
Mimosa_cryptogloea.fruit.epicarp = new Epicarp()

Mimosa_cryptogloea.seed = new Seed()


// Description authorship
Mimosa_cryptogloea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cryptogloea.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa cryptogloea
export { Mimosa_cryptogloea }